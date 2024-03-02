import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Category {
  _id?: Types.ObjectId;

  @Prop({ required: true, type: String })
  name: string;

  @Prop({ required: true, type: String })
  imageUrl: string;
}

export type CategoryDocument = HydratedDocument<Category>;
export const CategorySchema = SchemaFactory.createForClass(Category);
