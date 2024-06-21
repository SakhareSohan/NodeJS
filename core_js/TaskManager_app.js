class Task{
    constructor(title, discription){
      this.id = Date.now();
      this.title = title;
      this.discription = discription;
      this.completed = false;
    }
  }
  class TaskManager{
    constructor(){
      this.tasks = new Array();
    }
    addTask(title, description){
      let task = new Task(title, description);
      this.tasks.push(task);    
    }
    markTaskComplete(id){
      for (let i of this.tasks){
        if (id === this.task.id){
          this.task.completed = true;
          break;
        }
      }
    }
    getTasks(){
      console.log(this.tasks);
    }
  }
  let task = new TaskManager();
  task.addTask("Day 1","Installation");
  task.addTask("Day 2","Basics");
  task.addTask("Day 3","Implementation of Basic");
  task.addTask("Day 4","Advance");
  task.addTask("Day 5","Implementaion");
  
  task.getTasks();
  
  
  // Implement error handling and validation (e.g., ensuring task titles are not empty).
  // Use async/await with Promises for adding tasks asynchronously (simulated delay with setTimeout).