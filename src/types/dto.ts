// DTO
// export interface DataDTO {
//   data: PostDTO[]
// }
export interface PostDTO {
  id: number
  videoTitle: string
  videoUrl: string
  comment: string
  rating: number
  thumbnailUrl: string
  creatorName: string
  creatorUrl: string
  postedBy: PostedBy
  createdAt: string
  updatedAt: string
}

interface PostedBy {
  id: string
  username: string
  name: string
  registeredAt: string
}

export interface LoginDTO {
  username: string
  password: string
}

export interface RegisterDTO {
  username: string
  password: string
  name: string
}

export interface CredentialDTO {
  token: string
}

export interface CreateContentDTO {
  videoUrl: string
  comment: string
  rating: number
}
export interface UpdateContentDTO {
  comment: string
  rating: number
}
