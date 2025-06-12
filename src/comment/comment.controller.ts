import { Injectable } from '@nestjs/common';
import { CommentService } from './comment.service';
import { GrpcMethod } from '@nestjs/microservices';
import { CreateCommentDto } from './dtos/create-comment.dto';
import { GetCommentDto } from './dtos/get-comment.dto';
import { COMMENT_SERVICE_NAME } from 'src/generated/comment'; 

@Injectable()
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @GrpcMethod(COMMENT_SERVICE_NAME, 'CreateComment')
  async createComment(data: CreateCommentDto) {
    return this.commentService.createCommemt(data)
  }

  @GrpcMethod(COMMENT_SERVICE_NAME, 'GetComments')
  async getComments(data: GetCommentDto) {
    return this.commentService.getComments(data)
  }
}
