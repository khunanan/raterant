import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { promise } from 'selenium-webdriver';
@Injectable({
  providedIn: 'root'
})
export class APIService {
  private readonly url: string = "https://localhost:44384/Menu/"; // dev url
  constructor(private http: HttpClient) {
    console.log('Create CloudSyncProvider Provider');
  }
  public getWeatherForecast() {
    return this.http.get(this.url + "WeatherForecast");
  }

  public getMenu() {
    return this.http.get(this.url + "GetMenus");
  }

  public CreateMenu(mymodel: any) {
    console.log(mymodel);
    return this.http.post(this.url + "CreateMenu", mymodel);
  }

  public getMenubyid(Id: any) {
    return this.http.get(this.url + "GetMenus/" + Id);
  }

  public EditMenu(mymodel: any) {
    console.log(mymodel);
    return this.http.post(this.url + "EditeMenu", mymodel);
  }

  public DeleteMenu(Id: any) {
    console.log(Id);
    console.log(this.url + "DeleteMenu?id=" + Id);

    return this.http.delete(this.url + "DeleteMenu?id=" + Id);
  }

  public AddMenuToCart(mymodel: any, Tabel: any) {
    console.log(Tabel, mymodel);
    return this.http.post(this.url + "AddMenuToCart?table=" + Tabel, mymodel);
  }

  public Getorderbasket(Tabel: any) {
    console.log(Tabel);
    return this.http.get(this.url + "Getorderbasket?tabel=" + Tabel);
  }

  public getMenuOrderbyid(Id: any, Idmenu: any) {
    return this.http.get(this.url + "GetMenusOrder/" + Id + "?idmenu=" + Idmenu);
  }

  public ChangeTotalOrder(mymodel: any, Id: any) {
    console.log(mymodel, Id);
    return this.http.post(this.url + "ChangeTotalOrder?Id=" + Id, mymodel);
  }

  public Deletemanuorder(id: any, idmenu: any) {
    return this.http.delete(this.url + "Deletemanuorder/" + id + "/" + idmenu);
  }

  public ConfirmOrder(mymodel: any, Id: any) {
    return this.http.post(this.url + "ConfirmOrder?id=" + Id, mymodel);
  }

  public Getorderappuve() {
    return this.http.get(this.url + "Getorderappuve");
  }

  public GetMenusOrderbyid(Id: any) {
    return this.http.get(this.url + "GetMenusOrderbyid/" + Id);
  }

  public UpdateStatus(mymodel: any, Id: any) {
    return this.http.post(this.url + "UpdateStatus?id=" + Id, mymodel);
  }

  public UpdateStatusEnd(mymodel: any, Id: any) {
    return this.http.post(this.url + "UpdateStatusEnd?id=" + Id, mymodel);
  }

  public Getorderhistory() {
    return this.http.get(this.url + "Getorderhistory");
  }

  public Getordertable(Table: any) {
    return this.http.get(this.url + "Getordertable?table=" + Table);
  }

  public UpdateStatusPayment(mymodel, Table: any) {
    return this.http.post(this.url + "UpdateStatusPayment?table=" + Table, mymodel);
  }

  public Getorderslipus(Table: any) {
    return this.http.get(this.url + "Getorderslipus?table=" + Table);
  }

  public GetMenusOrderappuve(id: any) {
    return this.http.get(this.url + "GetMenusOrderappuve/" + id);
  }

  public GetMenuscategory(category: any) {
    return this.http.get(this.url + "GetMenusByCatagory?Catagory=" + category);
  }

  public UpdateStatusCancel(mymodel, Id: any) {
    return this.http.post(this.url + "UpdateStatusCancel?id=" + Id, mymodel);
  }

  public GetOrdersReady() {
    return this.http.get(this.url + "GetOrdersReady");
  }

  public UpdateStatusOrderReady(mymodel, Id: any) {
    return this.http.post(this.url + "UpdateStatusOrderReady?id=" + Id, mymodel);
  }

  public GetdataReprot(myDate = new Date()) {
    return this.http.get(this.url + "GetdataReprot?date=" + myDate);
  }
}