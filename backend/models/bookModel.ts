import mongoose, { Document, Schema } from 'mongoose';


interface IBook extends Document {
  title: string;
  author: string;
  publishYear: number;
}


const bookSchema: Schema<IBook> = new Schema(
  {
    title: {
      type: String,
      required: true, 
    },
    author: {
      type: String,
      required: true,
    },
    publishYear: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Book = mongoose.model<IBook>('Book', bookSchema);
