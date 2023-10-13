const createItem = (weight, type) => {
    return {
      weight,
      type
    };
  };
  
  
  function createBag(capacity) {
    let currentWeight = 0;
  
    function add(item) {
      if (currentWeight + item.weight > capacity) {
        console.log("Can't add more. Bag is full.");
      } else {
        currentWeight += item.weight;
        console.log(`Added ${item.type} (${item.weight} kg) to the bag.`);
      }
    }
  
    return {
      add
    };
  }
  
  
  const smallBag = createBag(5);
  const book = createItem(1, "Book");
  const laptop = createItem(2, "Laptop");
  const dumbbell = createItem(1, "Dumbbell");
  const key = createItem(1, "Key");
  


  smallBag.add(book);
  smallBag.add(laptop);
  smallBag.add(dumbbell);
  smallBag.add(key);