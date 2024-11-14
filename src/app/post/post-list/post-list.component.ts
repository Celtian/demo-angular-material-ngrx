import { animate, state, style, transition, trigger } from '@angular/animations';
import { CdkPortal, PortalModule } from '@angular/cdk/portal';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  OnDestroy,
  OnInit,
  ViewChild,
  effect,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSortModule, Sort, SortDirection } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Params, Router, RouterLink } from '@angular/router';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';
import { Store } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { debounceTime } from 'rxjs';
import { selectPaginationParams } from 'src/app/router.selectors';
import { PostListDetailComponent } from 'src/app/shared/components/post-list-detail/post-list-detail.component';
import { ROUTE_DEFINITION } from 'src/app/shared/constants/route-definition.constant';
import { PostDeleteDirective } from 'src/app/shared/directives/post-delete.directive';
import { PostDto } from 'src/app/shared/dto/post.dto';
import { BreadcrumbsPortalService } from 'src/app/shared/services/breadcrumbs-portal.service';
import { PostCollectionService } from '../post-collection.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  imports: [
    FormsModule,
    LocalizeRouterModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatTooltipModule,
    PostListDetailComponent,
    RouterLink,
    TranslateModule,
    PortalModule,
    PostDeleteDirective,
  ],
})
export class PostListComponent implements OnInit, OnDestroy {
  @ViewChild(CdkPortal, { static: true }) public portalContent!: CdkPortal;

  public readonly ROUTE_DEFINITION = ROUTE_DEFINITION;
  public readonly displayedColumns: string[] = ['id', 'title', 'actions'];
  public readonly displayedColumnsExpanded = [...this.displayedColumns, 'expand'];
  public readonly pageSizeOptions = [5, 10, 25, 100];
  public data = signal<PostDto[]>([]);
  public totalCount = signal(0);

  public query = signal('');
  public pageSize = signal(5);
  public pageIndex = signal(1);
  public sortBy = signal('id');
  public sortDirection = signal<SortDirection>('asc');

  public expandedElement: PostDto | null = null;
  private destroyRef = inject(DestroyRef);

  constructor(
    private postCollection: PostCollectionService,
    private cdr: ChangeDetectorRef,
    private breadcrumbsPortalService: BreadcrumbsPortalService,
    private router: Router,
    private store: Store,
  ) {
    effect(() => {
      this.postCollection
        .getAndCountWithQuery({
          _limit: this.pageSize(),
          _page: this.pageIndex(),
          _sort: this.sortBy(),
          _order: this.sortDirection(),
          title_like: this.query(),
        })
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe((posts) => {
          this.data.set(posts.items);
          this.totalCount.set(posts.totalCount);
        });
    });
  }

  public ngOnDestroy(): void {
    this.portalContent?.detach();
  }

  public ngOnInit(): void {
    this.breadcrumbsPortalService.setPortal(this.portalContent);

    this.store
      .select(selectPaginationParams)
      .pipe(debounceTime(1000), takeUntilDestroyed(this.destroyRef))
      .subscribe(({ query, pageIndex, pageSize, sortBy, sortDirection }) => {
        this.query.set(query);
        this.pageIndex.set(pageIndex);
        this.pageSize.set(pageSize);
        this.sortBy.set(sortBy);
        this.sortDirection.set(sortDirection);
      });
  }

  public onSortChange(event: Sort): void {
    this.setFiltersToRoute({
      sortBy: event.active,
      sortDirection: event.direction,
      pageIndex: null,
    });
  }

  public onPageChange(event: PageEvent): void {
    let pageIndex = null;
    if (event.pageSize === this.pageSize()) {
      pageIndex = event.pageIndex + 1 > 1 ? event.pageIndex + 1 : null;
    }
    this.setFiltersToRoute({
      pageIndex,
      pageSize: event.pageSize !== 5 ? event.pageSize : null,
    });
  }

  public onQueryChange(event: Event): void {
    const query = (event.target as HTMLInputElement).value;
    this.setFiltersToRoute({
      query: query ? encodeURIComponent(query) : null,
      pageIndex: null,
    });
  }

  public onQueryRemove(): void {
    this.setFiltersToRoute({
      query: null,
      pageIndex: null,
    });
  }

  public onClear(): void {
    this.setFiltersToRoute({
      query: null,
      pageIndex: null,
      pageSize: null,
      sortBy: null,
      sortDirection: null,
    });
  }

  public onDeleted(id: number): void {
    this.data.update((value) => value.filter((i) => i.id !== id));
  }

  public onExpand(event: Event, element: PostDto): void {
    this.expandedElement = this.expandedElement === element ? null : element;
    this.cdr.markForCheck();
    event.stopPropagation();
  }

  public trackByPostId(_: number, target: PostDto): string | number {
    return target.id;
  }

  private setFiltersToRoute(queryParams?: Params | null): void {
    this.router.navigate([], {
      queryParams,
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  }
}
