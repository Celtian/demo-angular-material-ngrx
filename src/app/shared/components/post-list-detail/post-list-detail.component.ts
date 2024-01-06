import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subject, debounceTime, switchMap } from 'rxjs';
import { UserCollectionService } from 'src/app/post/user-collection.service';
import { DataSource } from 'src/app/shared/classes/data-source';
import { DEFAULT_USER } from 'src/app/shared/constants/user.constant';
import { UserDto } from 'src/app/shared/dto/user.dto';
import { UserInfoComponent } from '../user-info/user-info.component';

@Component({
  standalone: true,
  selector: 'app-post-list-detail',
  templateUrl: './post-list-detail.component.html',
  styleUrl: './post-list-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [UserInfoComponent, TranslateModule],
})
export class PostListDetailComponent implements OnChanges, OnInit {
  @Input({ required: true }) public id!: number;

  private destroyRef = inject(DestroyRef);
  public dataSource = new DataSource<UserDto>(DEFAULT_USER);
  private idSubj = new Subject<number>();

  constructor(
    private userCollection: UserCollectionService,
    private translate: TranslateService,
  ) {}

  public ngOnInit(): void {
    this.idSubj
      .pipe(
        debounceTime(500),
        switchMap((id) => this.userCollection.getByKey(id)),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe({
        next: (res) => {
          this.dataSource.setData(res);
        },
        error: () => {
          const error = this.translate.instant('error.unexpected-exception');
          this.dataSource.setError(error);
        },
      });

    this.idSubj.next(this.id);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['id']) {
      this.idSubj.next(this.id);
    }
  }
}
