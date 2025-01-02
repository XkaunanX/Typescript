// Enumeraciones en TypeScript
enum Status {
    Pending = "PENDING",
    InProgress = "IN_PROGRESS",
    Completed = "COMPLETED",
  }
  
  // Uso de enums
  let currentStatus: Status = Status.Pending;
  
  function updateStatus(status: Status): void {
    currentStatus = status;
    console.log(`Estado actualizado a: ${currentStatus}`);
  }
  
  updateStatus(Status.InProgress);
  updateStatus(Status.Completed);
  