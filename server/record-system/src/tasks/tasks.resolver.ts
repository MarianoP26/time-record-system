import { Resolver, Query, Mutation, Args, Parent, ResolveField } from '@nestjs/graphql';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';
import { CreateTaskInput } from './dto/create-task.input';
import { UpdateTaskInput } from './dto/update-task.input';
import { User } from 'src/users/entities/user.entity';

@Resolver(of => Task)
export class TasksResolver {
  constructor(private tasksService: TasksService) {}

    @Query(returns => [Task])
    tasks(): Promise<Task[]> {
      return this.tasksService.findAll();
    }

    @Mutation(returns => Task)
    createTask(@Args('createTaskInput') createTaskInput: CreateTaskInput): Promise<Task>{
      return this.tasksService.createTask(createTaskInput);
    }

    @Mutation(() => Task)
    updateTask(@Args('updateTaskInput') updateTaskInput: UpdateTaskInput) {
      return this.tasksService.update(updateTaskInput.id, updateTaskInput);
    }

    @Query(returns => Task)
    getTask(@Args('name', { type: () => String }) name: string): Promise<Task>{
      return this.tasksService.findOne(name);
    }

    @ResolveField(returns => User)
    user(@Parent() task: Task): Promise<User> {
      return this.tasksService.getUser(task.userId);
    }
  
}
