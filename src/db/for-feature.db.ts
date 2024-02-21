import {
  Category,
  CategorySchema,
} from 'src/category/entities/category.entity';
import { Command, CommandSchema } from 'src/command/entities/command.entity';
import { Post, PostSchema } from 'src/post/entities/post.entity';
import { User, UserSchema } from 'src/user/entities/user.entity';

export default [
  { name: User.name, schema: UserSchema },
  { name: Post.name, schema: PostSchema },
  { name: Category.name, schema: CategorySchema },
  { name: Command.name, schema: CommandSchema },
];
