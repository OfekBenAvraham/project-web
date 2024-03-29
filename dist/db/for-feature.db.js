"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const category_entity_1 = require("../category/entities/category.entity");
const comment_entity_1 = require("../comment/entities/comment.entity");
const post_entity_1 = require("../post/entities/post.entity");
const user_entity_1 = require("../user/entities/user.entity");
exports.default = [
    { name: user_entity_1.User.name, schema: user_entity_1.UserSchema },
    { name: post_entity_1.Post.name, schema: post_entity_1.PostSchema },
    { name: category_entity_1.Category.name, schema: category_entity_1.CategorySchema },
    { name: comment_entity_1.Comment.name, schema: comment_entity_1.CommentSchema },
];
//# sourceMappingURL=for-feature.db.js.map