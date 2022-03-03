import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login-amin',
    loadChildren: () => import('./login-amin/login-amin.module').then(m => m.LoginAminPageModule)
  },
  {
    path: 'manu',
    loadChildren: () => import('./manu/manu.module').then(m => m.ManuPageModule)
  },
  {
    path: 'basket/:tabel',
    loadChildren: () => import('./basket/basket.module').then(m => m.BasketPageModule)
  },
  {
    path: 'food-orderus/:id',
    loadChildren: () => import('./food-orderus/food-orderus.module').then(m => m.FoodOrderusPageModule)
  },
  {
    path: 'food-orderad/:id',
    loadChildren: () => import('./food-orderad/food-orderad.module').then(m => m.FoodOrderadPageModule)
  },
  {
    path: 'manuad',
    loadChildren: () => import('./manuad/manuad.module').then(m => m.ManuadPageModule)
  },
  {
    path: 'edit-manu/:id',
    loadChildren: () => import('./edit-manu/edit-manu.module').then(m => m.EditManuPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminPageModule)
  },
  {
    path: 'create-manu',
    loadChildren: () => import('./create-manu/create-manu.module').then(m => m.CreateManuPageModule)
  },
  {
    path: 'order-history',
    loadChildren: () => import('./order-history/order-history.module').then(m => m.OrderHistoryPageModule)
  },
  {
    path: 'slip/:nameTable',
    loadChildren: () => import('./slip/slip.module').then(m => m.SlipPageModule)
  },
  {
    path: 'slipuse/:id',
    loadChildren: () => import('./slipuse/slipuse.module').then(m => m.SlipusePageModule)
  },
  {
    path: 'edit-ordermenu/:id/:item.nameManu.id',
    loadChildren: () => import('./edit-ordermenu/edit-ordermenu.module').then(m => m.EditOrdermenuPageModule)
  },
  {
    path: 'listmanuad',
    loadChildren: () => import('./listmanuad/listmanuad.module').then(m => m.ListmanuadPageModule)
  },
  {
    path: 'historyorderuse',
    loadChildren: () => import('./historyorderuse/historyorderuse.module').then( m => m.HistoryorderusePageModule)
  },
  {
    path: 'order-ready',
    loadChildren: () => import('./order-ready/order-ready.module').then( m => m.OrderReadyPageModule)
  },
  {
    path: 'conferim-order/:id',
    loadChildren: () => import('./conferim-order/conferim-order.module').then( m => m.ConferimOrderPageModule)
  },
  {
    path: 'report',
    loadChildren: () => import('./report/report.module').then( m => m.ReportPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
