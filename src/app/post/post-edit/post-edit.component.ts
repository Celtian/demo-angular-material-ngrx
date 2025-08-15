import { CdkPortal, PortalModule } from '@angular/cdk/portal';
import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, DestroyRef, OnDestroy, OnInit, inject, viewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router, RouterLink } from '@angular/router';
import { LocalizeRouterModule, LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { Store } from '@ngrx/store';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Observable, first, switchMap } from 'rxjs';
import { selectPostId } from 'src/app/router.selectors';
import { DataSource } from 'src/app/shared/classes/data-source';
import { DEFAULT_POST } from 'src/app/shared/constants/post.constant';
import { ROUTE_DEFINITION } from 'src/app/shared/constants/route-definition.constant';
import { PostDeleteDirective } from 'src/app/shared/directives/post-delete.directive';
import { PostDto } from 'src/app/shared/dto/post.dto';
import { CanComponentDeactivate } from 'src/app/shared/guards/can-deactivate-guard.service';
import { filterNumber } from 'src/app/shared/rxjs/filter-number';
import { setInitialIfNotNumber } from 'src/app/shared/rxjs/set-initial-if-not-number';
import { BreadcrumbsPortalService } from 'src/app/shared/services/breadcrumbs-portal.service';
import { CustomConfirmDialog, CustomConfirmDialogService } from 'src/app/shared/services/custom-confirm-dialog.service';
import { PostCollectionService } from '../post-collection.service';

@Component({
  selector: 'app-post-edit',
  imports: [
    PortalModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatTooltipModule,
    ReactiveFormsModule,
    TranslateModule,
    RouterLink,
    LocalizeRouterModule,
    PostDeleteDirective,
  ],
  templateUrl: './post-edit.component.html',
  styleUrl: './post-edit.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostEditComponent implements OnInit, OnDestroy, CanComponentDeactivate {
  private postCollection = inject(PostCollectionService);
  private translate = inject(TranslateService);
  private breadcrumbsPortalService = inject(BreadcrumbsPortalService);
  private fb = inject(FormBuilder);
  private snackBar = inject(MatSnackBar);
  private lr = inject(LocalizeRouterService);
  private confirm = inject(CustomConfirmDialogService);
  private router = inject(Router);
  private store = inject(Store);

  public readonly portalContent = viewChild.required(CdkPortal);
  private destroyRef = inject(DestroyRef);
  public dataSource = new DataSource<PostDto>(DEFAULT_POST);
  public readonly ROUTE_DEFINITION = ROUTE_DEFINITION;

  public form = this.fb.nonNullable.group({
    title: ['', [Validators.required, Validators.min(3)]],
    body: ['', [Validators.required, Validators.min(3)]],
  });

  public canDeactivate(): boolean | Observable<boolean> {
    return this.form.pristine || this.confirm.openCustomConfirmDialog(CustomConfirmDialog.UnsavedWork);
  }

  public ngOnInit(): void {
    this.breadcrumbsPortalService.setPortal(this.portalContent());

    this.store
      .select(selectPostId)
      .pipe(
        setInitialIfNotNumber(this.dataSource),
        filterNumber(),
        switchMap((id) => this.postCollection.getByKey(id)),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe({
        next: (post) => {
          this.dataSource.setData(post);
          this.form.patchValue(post);
        },
        error: (err) => {
          if (err instanceof HttpErrorResponse && err.status >= 400 && err.status < 500) {
            this.dataSource.setData(DEFAULT_POST);
          } else {
            const error = this.translate.instant('error.unexpected-exception');
            this.dataSource.setError(error);
          }
        },
      });
  }

  public ngOnDestroy(): void {
    this.portalContent()?.detach();
  }

  public onSubmit(): void {
    this.postCollection
      .update({
        id: this.dataSource.data().id,
        ...this.form.value,
      })
      .pipe(first())
      .subscribe({
        next: (post) => {
          this.dataSource.setData(post);
          this.form.reset(post);
          this.snackBar.open(this.translate.instant('response.update.success'), this.translate.instant('uni.close'));
        },
        error: () => {
          this.snackBar.open(this.translate.instant('response.update.failed'), this.translate.instant('uni.close'));
        },
      });
  }

  public onReset(event: Event): void {
    event.preventDefault();
    this.form.reset(this.dataSource.data());
  }

  public onDeleted(): void {
    const translatedRoute = this.lr.translateRoute(`/`);
    this.router.navigate([translatedRoute]);
  }
}
