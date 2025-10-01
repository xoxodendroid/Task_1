import mongoose from 'mongoose';

export async function connectDB() {
  const uri = 'mongodb+srv://karimhelrafie12_db_user:c4QHVtxOB1oWKf9a@cluster0.vlih6te.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
  if (!uri) throw new Error('MONGO_URI is not set');
  try {
    await mongoose.connect(uri, { autoIndex: true });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error', err.message);
    process.exit(1);
  }
}
