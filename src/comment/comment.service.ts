import { Injectable } from '@nestjs/common';
import { CommentRepository } from './comment.repository';
import { CreateCommentDto } from './dtos/create-comment.dto';
import { GetCommentDto } from './dtos/get-comment.dto';

@Injectable()
export class CommentService {
    constructor(
        private readonly commentRepo: CommentRepository,
    ){}

    async createCommemt(data: CreateCommentDto){
        return this.commentRepo.createComment(data)
    }
 
    async getComments(data: GetCommentDto) {
        return this.commentRepo.getComments(data)
    }
}
