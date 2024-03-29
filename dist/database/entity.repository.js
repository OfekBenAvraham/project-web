"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityRepository = void 0;
class EntityRepository {
    constructor(entityModel) {
        this.entityModel = entityModel;
    }
    create(createEntityData) {
        return this.entityModel.create(createEntityData);
    }
    find(entityFilterQuery = {}, projection = {}, options = {}) {
        return this.entityModel.find(entityFilterQuery, projection, options);
    }
    findOne(entityFilterQuery = {}, projection = {}, options = {}) {
        return this.entityModel.findOne(entityFilterQuery, projection, options);
    }
    findOneAndUpdate(entityFilterQuery = {}, updateEntityDate, options = {}) {
        return this.entityModel.findOneAndUpdate(entityFilterQuery, updateEntityDate, options);
    }
    findOneAndDelete(entityFilterQuery = {}, options = {}) {
        return this.entityModel.findOneAndDelete(entityFilterQuery, options);
    }
    exists(entityFilterQuery = {}) {
        return this.entityModel.exists(entityFilterQuery);
    }
}
exports.EntityRepository = EntityRepository;
//# sourceMappingURL=entity.repository.js.map