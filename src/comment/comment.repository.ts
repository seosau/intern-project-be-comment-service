import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { Comment } from "./entities/comment.entity";
import { CreateCommentDto } from "./dtos/create-comment.dto";
import { GetCommentDto } from "./dtos/get-comment.dto";
import { GetCommentsResponse } from "src/generated/comment";

@Injectable()
export class CommentRepository extends Repository<Comment> {
    constructor(
        dataSource: DataSource,
    ){
        super(Comment, dataSource.createEntityManager());
    }

    async createComment (data: CreateCommentDto) {
        try{
            const comment = this.create(data)
            const res = await this.save(comment)

            return res
        } catch (err) {
            console.error('Create comment error: ', err)
            throw err
        }
    }

    async getComments (data: GetCommentDto): Promise<GetCommentsResponse> {
        try{
            const res = await this.find({
                where: {
                    postId: data.postId
                }
            })

            const response: GetCommentsResponse = {
                comments: res.map((comment) => {
                    return {
                        ...comment,
                        createdAt: comment.createdAt?.toISOString() ?? null,
                        updatedAt: comment.updatedAt?.toISOString() ?? null,
                        deletedAt: comment.deletedAt?.toISOString() ?? null,
                    }
                })
            }
            return response
        } catch (err) {
            console.error('Get comments error: ', err)
            throw err
        }
    }
}