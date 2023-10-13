public class Bag {
	int currentWeight;
	boolean canAddItem(Item item);
}

boolean canAddItem(Item item){
	if(currentWeight+ item.weight>20){
		return false;
	}
	else{
		return true;
	}
}


public static void main(String [] args){
	Crossbow crossbow = new Crossbow();
	if(Bag.canAddItem(crossbow)){
		Bag.addItem(crossbow);
	}
}
