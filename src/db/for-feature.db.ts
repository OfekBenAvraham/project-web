import {
  Category,
  CategorySchema,
} from '../category/entities/category.entity';
import { Comment, CommentSchema } from '../comment/entities/comment.entity';
import { Post, PostSchema } from '../post/entities/post.entity';
import { User, UserSchema } from '../user/entities/user.entity';

export default [
  { name: User.name, schema: UserSchema },
  { name: Post.name, schema: PostSchema },
  { name: Category.name, schema: CategorySchema },
  { name: Comment.name, schema: CommentSchema },
];
