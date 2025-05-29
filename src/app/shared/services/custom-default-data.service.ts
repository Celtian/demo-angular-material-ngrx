import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Optional } from '@angular/core';
import {
  DefaultDataService,
  DefaultDataServiceConfig,
  DefaultDataServiceFactory,
  EntityCollectionDataService,
  HttpOptions,
  HttpUrlGenerator,
  QueryParams,
} from '@ngrx/data';
import { Observable, map } from 'rxjs';

export class CustomDefaultDataService<T> extends DefaultDataService<T> {
  constructor(
    entityName: string,
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator,
    config?: DefaultDataServiceConfig,
  ) {
    super(entityName, http, httpUrlGenerator, config);
  }

  public getAndCountWithQuery(
    queryParams: QueryParams | string | undefined,
    options?: HttpOptions,
  ): Observable<{ items: T[]; totalCount: number }> {
    const qParams = typeof queryParams === 'string' ? { fromString: queryParams } : { fromObject: queryParams };
    const params = new HttpParams(qParams);
    return this.execute('GET', this.entitiesUrl, undefined, { params, observe: 'response' }, options).pipe(
      map((res) => {
        return {
          totalCount: Number(res.headers.get('x-total-count')) || 0,
          items: res.body || [],
        };
      }),
    );
  }
}

@Injectable()
export class CustomDefaultDataServiceFactory extends DefaultDataServiceFactory {
  constructor(
    protected override http: HttpClient,
    protected override httpUrlGenerator: HttpUrlGenerator,
    @Optional() protected override config?: DefaultDataServiceConfig,
  ) {
    super(http, httpUrlGenerator, config);
  }

  override create<T>(entityName: string): EntityCollectionDataService<T> {
    return new CustomDefaultDataService<T>(entityName, this.http, this.httpUrlGenerator, this.config);
  }
}
