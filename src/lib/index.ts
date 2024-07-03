// place files you want to import through the `$lib` alias in this folder.
export interface Bucket {
    id: string
    name: string
    owner: string
    file_size_limit?: number
    allowed_mime_types?: string[]
    created_at: string
    updated_at: string
    public: boolean
  }
  
  export interface FileObject {
    name: string
    bucket_id: string
    owner: string
    id: string
    updated_at: string
    created_at: string
    last_accessed_at: string
    metadata: Record<string, any>
    buckets: Bucket
  }

  export type PhotoObject={
    url:string,
    photoName:string
    isAFavorite:boolean
  }

  export function extractFilePath(url:string){
    const parts = url.split('/user_uploads/')
    if (parts.length < 2){
        console.error('Invalid URL format')
        return ''
    }
    let filePath = parts[1];
    if (filePath.includes('?')){
        filePath = filePath.split('?')[0]
    }
    return 'user_uploads/' + filePath
}