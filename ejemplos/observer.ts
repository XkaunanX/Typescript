type Observer = {
    update: (data: any) => void;
  };
  
  class Subject {
    private observers: Observer[] = [];
  
    addObserver(observer: Observer): void {
      this.observers.push(observer);
    }
  
    removeObserver(observer: Observer): void {
      this.observers = this.observers.filter(obs => obs !== observer);
    }
  
    notifyObservers(data: any): void {
      this.observers.forEach(observer => observer.update(data));
    }
  }
  
  // Observadores concretos
  class ConsoleLogger implements Observer {
    update(data: any): void {
      console.log("ConsoleLogger:", data);
    }
  }
  
  class AlertNotifier implements Observer {
    update(data: any): void {
      alert(`AlertNotifier: ${data}`);
    }
  }
  
  // Ejemplo de uso
  const subject = new Subject();
  const logger = new ConsoleLogger();
  const notifier = new AlertNotifier();
  
  subject.addObserver(logger);
  subject.addObserver(notifier);
  
  subject.notifyObservers("Evento ocurrido");
  