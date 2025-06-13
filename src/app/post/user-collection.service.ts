import { Injectable, inject } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { UserDto } from '../shared/dto/user.dto';

@Injectable({
  providedIn: 'root',
})
export class UserCollectionService extends EntityCollectionServiceBase<UserDto> {
  constructor() {
    const serviceElementsFactory = inject(EntityCollectionServiceElementsFactory);

    super('Users', serviceElementsFactory);
  }
}
