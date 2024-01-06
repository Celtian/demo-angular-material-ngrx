import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataServiceConfig, HttpUrlGenerator } from '@ngrx/data';
import { Observable } from 'rxjs';
import { ExpandedPostDto, PostDto } from '../shared/dto/post.dto';
import { CustomDefaultDataService } from '../shared/services/custom-default-data.service';

@Injectable({
  providedIn: 'root',
})
export class PostDataService extends CustomDefaultDataService<PostDto> {
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator, config?: DefaultDataServiceConfig) {
    super('Posts', http, httpUrlGenerator, config);
  }

  public getExpandedById(key: number): Observable<ExpandedPostDto> {
    let err: Error | undefined;
    if (key == null) {
      err = new Error(`No "${this.entityName}" key to get`);
    }
    return this.execute('GET', this.entityUrl + key, err, null, {
      httpParams: {
        fromObject: {
          _expand: 'user',
        },
      },
    });
  }
}
