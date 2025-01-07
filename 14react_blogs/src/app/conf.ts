
export const conf = {
    appUrl : String(import.meta.env.VITE_APPWRITE_URL),
    projectId : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    databaseID : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    collectionID : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    bucketID : String(import.meta.env.VITE_APPWRITE_BUCKRT_ID),
}