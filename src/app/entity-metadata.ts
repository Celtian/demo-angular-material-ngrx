import { EntityDataModuleConfig, EntityDispatcherDefaultOptions, EntityMetadataMap } from '@ngrx/data';

const customEntityOptions: Partial<EntityDispatcherDefaultOptions> = {
  optimisticAdd: false,
  optimisticDelete: false,
  optimisticSaveEntities: false,
  optimisticUpdate: false,
  optimisticUpsert: false,
};

const entityMetadata: EntityMetadataMap = {
  Posts: {
    entityDispatcherOptions: customEntityOptions,
  },
  Users: {
    entityDispatcherOptions: customEntityOptions,
  },
};

const pluralNames = {
  Posts: 'Posts',
  Users: 'Users',
};

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames,
};
