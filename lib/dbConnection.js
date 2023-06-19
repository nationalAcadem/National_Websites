import mongoose from 'mongoose';

const connectMongo = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      console.log('Already connected to the database');
      return;
    }

    const connectionString = process.env.MONGODB_URI || serverRuntimeConfig.connectionString;
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });

    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
};

export default connectMongo;
