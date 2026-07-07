import { Injectable } from '@angular/core';

export class Product {
  id: string = '';
  name: string = '';
  category: string = '';
  price: number | null = null;
  description: string = '';
  quantity: number | null = null;
  availability: boolean = false;
}

@Injectable({ providedIn: 'root' })
export class Service {
  private products: Product[] = [];

  constructor() {
    this.loadData();
  }

  getProducts(): Product[] {
    return this.products;
  }

  addProduct(p: Product): void {
    this.products.push(p);
    this.saveData();
  }

  private saveData(): void {
    localStorage.setItem("dev_DB", JSON.stringify(this.products));
  }

  private loadData(): void {
    const data = localStorage.getItem("dev_DB");
    if (data) {
      this.products = JSON.parse(data);
    } else {
      this.seed();
    }
  }


getProductById(id: string): Product | undefined {
  return this.products.find(p => p.id === id);
}

removeProduct(id: string): void {
  this.products = this.products.filter(p => p.id !== id);
  this.saveData(); 
}

  private seed(): void {
    this.products = [];
    
    let d = new Product();
    d.id = "7f2c9a1e-3b45-4d91-8a6f-12e9c5b0a841";
    d.name = "Bluetooth hangszóró";
    d.category = "Elektronika";
    d.price = 12990;
    d.description = "Hordozható Bluetooth hangszóró erős akkumulátorral.";
    d.quantity = 12;
    d.availability = true;
    this.products.push(d);

    d = new Product();
    d.id = "b3a8d6f4-91c2-4e7a-9f35-6d0b2c8a71e4";
    d.name = "Vezeték nélküli egér";
    d.category = "Elektronika";
    d.price = 7990;
    d.description = "Ergonomikus kialakítású vezeték nélküli egér.";
    d.quantity = 25;
    d.availability = true;
    this.products.push(d);

    d = new Product();
    d.id = "e91f4b2c-6a73-4d8e-b0f5-24c7a9e1d302";
    d.name = "Powerbank";
    d.category = "Elektronika";
    d.price = 18990;
    d.description = "Nagy kapacitású powerbank gyorstöltés támogatással.";
    d.quantity = 8;
    d.availability = true;
    this.products.push(d);

    d = new Product();
    d.id = "4c7b8e19-2d5f-43a6-9c0e-81f3a7d62b95";
    d.name = "USB-C töltőkábel";
    d.category = "Elektronika";
    d.price = 2990;
    d.description = "Két méteres USB-C kábel töltéshez.";
    d.quantity = 0;
    d.availability = false;
    this.products.push(d);

    d = new Product();
    d.id = "a6d3e8f1-9b42-4c75-8f10-37e2c6a4b901";
    d.name = "Jegyzetfüzet";
    d.category = "Irodaszer";
    d.price = 1490;
    d.description = "Keményfedeles, vonalas jegyzetfüzet.";
    d.quantity = 40;
    d.availability = true;
    this.products.push(d);

    d = new Product();
    d.id = "f2e7c9a5-0d84-4b31-9e6a-75c1d3f8b240";
    d.name = "Tollkészlet";
    d.category = "Irodaszer";
    d.price = 2490;
    d.description = "Háromszínű tollkészlet.";
    d.quantity = 18;
    d.availability = true;
    this.products.push(d);

    d = new Product();
    d.id = "9c1a5f7e-8d32-46b4-ae90-2f6c7d1b3a85";
    d.name = "Asztali rendszerező";
    d.category = "Irodaszer";
    d.price = 3990;
    d.description = "Praktikus asztali rendszerező.";
    d.quantity = 6;
    d.availability = true;
    this.products.push(d);

    d = new Product();
    d.id = "d84f3a6b-1c72-4e95-b0a8-64f2c9e7d315";
    d.name = "Jóga matrac";
    d.category = "Sport";
    d.price = 8990;
    d.description = "Csúszásmentes jóga matrac.";
    d.quantity = 9;
    d.availability = true;
    this.products.push(d);

    d = new Product();
    d.id = "5b7e2c91-6f34-4a80-9d2e-18c7f3a6b045";
    d.name = "Sportkulacs";
    d.category = "Sport";
    d.price = 3990;
    d.description = "Rozsdamentes acél kulacs.";
    d.quantity = 15;
    d.availability = true;
    this.products.push(d);

    d = new Product();
    d.id = "c6f1a8d3-2b94-47e0-8c5a-91d7e3f2b608";
    d.name = "Futóöv";
    d.category = "Sport";
    d.price = 4990;
    d.description = "Könnyű futóöv.";
    d.quantity = 0;
    d.availability = false;
    this.products.push(d);

    d = new Product();
    d.id = "1e9c4b7a-83f5-4d62-a0c9-35b8e1f7d204";
    d.name = "LED asztali lámpa";
    d.category = "Otthon";
    d.price = 11990;
    d.description = "Modern LED asztali lámpa.";
    d.quantity = 5;
    d.availability = true;
    this.products.push(d);

    d = new Product();
    d.id = "8a3d6f2c-7b91-4e45-9f0a-62c5d8e1b374";
    d.name = "Dekoratív párna";
    d.category = "Otthon";
    d.price = 5990;
    d.description = "Puha dekoratív párna.";
    d.quantity = 3;
    d.availability = true;
    this.products.push(d);

    d = new Product();
    d.id = "3f7b1c9e-5a84-42d6-b0e7-19c4a8f2d935";
    d.name = "Robotporszívó";
    d.category = "Otthon";
    d.price = 24990;
    d.description = "Alapmodell robotporszívó.";
    d.quantity = 4;
    d.availability = true;
    this.products.push(d);

    d = new Product();
    d.id = "6d2e9a4f-0c75-48b1-9f3a-84e7c1d5b206";
    d.name = "Serpenyő";
    d.category = "Konyha";
    d.price = 6990;
    d.description = "Rozsdamentes acél serpenyő.";
    d.quantity = 10;
    d.availability = true;
    this.products.push(d);

    d = new Product();
    d.id = "b9e4c7a1-3f62-4d85-a0b9-27c6e1f8d340";
    d.name = "Digitális konyhai mérleg";
    d.category = "Konyha";
    d.price = 3490;
    d.description = "Pontos digitális mérleg.";
    d.quantity = 7;
    d.availability = true;
    this.products.push(d);

    d = new Product();
    d.id = "0f8c3a7d-91e5-4b62-8a0c-53d2f7e9b184";
    d.name = "Turmixgép";
    d.category = "Konyha";
    d.price = 15990;
    d.description = "Több sebességfokozatú turmixgép.";
    d.quantity = 0;
    d.availability = false;
    this.products.push(d);

    this.saveData();
  }
}