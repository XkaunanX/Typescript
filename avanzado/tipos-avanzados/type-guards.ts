interface Dog {
    bark(): void;
  }
  
  interface Cat {
    meow(): void;
  }
  
  function isDog(pet: Dog | Cat): pet is Dog {
    return (pet as Dog).bark !== undefined;
  }
  
  function interactWithPet(pet: Dog | Cat) {
    if (isDog(pet)) {
      pet.bark();
    } else {
      pet.meow();
    }
  }
  
  const myDog: Dog = { bark: () => console.log("Woof!") };
  const myCat: Cat = { meow: () => console.log("Meow!") };
  
  interactWithPet(myDog); // "Woof!"
  interactWithPet(myCat); // "Meow!"
  