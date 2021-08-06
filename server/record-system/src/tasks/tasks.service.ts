import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreateTaskInput } from './dto/create-task.input';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  constructor(@InjectRepository(Task) private tasksRepository: Repository<Task>
    , private usersService: UsersService){}

  async createTask(createTaskInput: CreateTaskInput): Promise<Task> {
    const newTask = this.tasksRepository.create(createTaskInput);
    return this.tasksRepository.save(newTask);
  }

  async findAll(): Promise<Task[]> {
    return this.tasksRepository.find();
  }

  async findOne(name: string): Promise<Task> {
    return this.tasksRepository.findOneOrFail(name);
  }

  async getUser(userId: number): Promise<User> {
    return this.usersService.findOne(userId);
  }

}
