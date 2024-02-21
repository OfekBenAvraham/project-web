import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, Types } from 'mongoose';
import { Post } from 'src/post/entities/post.entity';
import { User } from 'src/user/entities/user.entity';

@Schema({ timestamps: true })
export class comment {
  _id?: Types.ObjectId;

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Post' })
  post: Post;

  @Prop({ required: true, type: String })
  comment: string;
}

export type CommentDocument = HydratedDocument<comment>;
export const CommentSchema = SchemaFactory.createForClass(comment);
