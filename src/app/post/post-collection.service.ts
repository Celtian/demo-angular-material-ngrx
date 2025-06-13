import { Injectable, inject } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
  HttpOptions,
  MergeStrategy,
  QueryParams,
} from '@ngrx/data';
import { Observable, tap } from 'rxjs';
import { PostDto } from '../shared/dto/post.dto';
import { PostDataService } from './post-data.service';
import { UserCollectionService } from './user-collection.service';

@Injectable({
  providedIn: 'root',
})
export class PostCollectionService extends EntityCollectionServiceBase<PostDto> {
  private postData = inject(PostDataService);
  private userCollection = inject(UserCollectionService);

  constructor() {
    const serviceElementsFactory = inject(EntityCollectionServiceElementsFactory);

    super('Posts', serviceElementsFactory);
  }

  public getAndCountWithQuery(
    queryParams: QueryParams | string | undefined,
    options?: HttpOptions,
  ): Observable<{ items: PostDto[]; totalCount: number }> {
    return this.postData
      .getAndCountWithQuery(queryParams, options)
      .pipe(tap((data) => this.addManyToCache(data.items, { mergeStrategy: MergeStrategy.IgnoreChanges })));
  }

  public getExpanded(key: number) {
    return this.postData.getExpandedById(key).pipe(
      tap((result) => {
        this.addOneToCache(result, { mergeStrategy: MergeStrategy.IgnoreChanges });
        this.userCollection.addOneToCache(result.user, { mergeStrategy: MergeStrategy.IgnoreChanges });
      }),
    );
  }
}
