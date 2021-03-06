/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '@angular/common';
import * as i2 from './breadcrumb';
import * as i3 from '@angular/router';
import * as i4 from './breadcrumbService';
const styles_BreadcrumbComponent:any[] = ([] as any[]);
export const RenderType_BreadcrumbComponent:i0.RendererType2 = i0.ɵcrt({encapsulation:2,
    styles:styles_BreadcrumbComponent,data:{}});
function View_BreadcrumbComponent_2(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'a',[['role','button']],
      (null as any),[[(null as any),'click']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:any = _v.component;
        if (('click' === en)) {
          const pd_0:any = ((<any>_co.navigateTo('/')) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['','']))],(null as any),
      (_ck,_v) => {
        const currVal_0:any = (<any>_v.parent).context.$implicit;
        _ck(_v,1,0,currVal_0);
      });
}
function View_BreadcrumbComponent_3(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'a',[['role','button']],
      (null as any),[[(null as any),'click']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:any = _v.component;
        if (('click' === en)) {
          const pd_0:any = ((<any>_co.navigateTo((<any>_v.parent).context.$implicit)) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['','']))],(null as any),
      (_ck,_v) => {
        var _co:any = _v.component;
        const currVal_0:any = _co.friendlyName((<any>_v.parent).context.$implicit);
        _ck(_v,1,0,currVal_0);
      });
}
function View_BreadcrumbComponent_4(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'span',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i0.ɵted((null as any),['','']))],(null as any),(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = _co.friendlyName((<any>_v.parent).context.$implicit);
    _ck(_v,1,0,currVal_0);
  });
}
function View_BreadcrumbComponent_5(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'span',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i0.ɵted((null as any),['','']))],(null as any),(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = _co.friendlyName('/');
    _ck(_v,1,0,currVal_0);
  });
}
function View_BreadcrumbComponent_1(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),16,'li',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),i0.ɵdid(278528,
      (null as any),0,i1.NgClass,[i0.IterableDiffers,i0.KeyValueDiffers,i0.ElementRef,
          i0.Renderer],{ngClass:[0,'ngClass']},(null as any)),i0.ɵpod({'breadcrumb-item':0,
      'active':1}),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),i0.ɵted((null as any),
      ['\n                '])),(_l()(),i0.ɵand(16777216,(null as any),(null as any),
      1,(null as any),View_BreadcrumbComponent_2)),i0.ɵdid(16384,(null as any),0,i1.NgIf,
      [i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),(_l()(),
      i0.ɵted((null as any),['\n                '])),(_l()(),i0.ɵand(16777216,(null as any),
      (null as any),1,(null as any),View_BreadcrumbComponent_3)),i0.ɵdid(16384,(null as any),
      0,i1.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),
      (_l()(),i0.ɵted((null as any),['\n                '])),(_l()(),i0.ɵand(16777216,
          (null as any),(null as any),1,(null as any),View_BreadcrumbComponent_4)),
      i0.ɵdid(16384,(null as any),0,i1.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n                '])),
      (_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_BreadcrumbComponent_5)),
      i0.ɵdid(16384,(null as any),0,i1.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n            ']))],
      (_ck,_v) => {
        var _co:any = _v.component;
        const currVal_0:any = _ck(_v,2,0,_co.useBootstrap,_v.context.last);
        _ck(_v,1,0,currVal_0);
        const currVal_1:boolean = (!_v.context.last && (_v.context.$implicit == _co.prefix));
        _ck(_v,6,0,currVal_1);
        const currVal_2:boolean = (!_v.context.last && (_v.context.$implicit != _co.prefix));
        _ck(_v,9,0,currVal_2);
        const currVal_3:any = _v.context.last;
        _ck(_v,12,0,currVal_3);
        const currVal_4:any = (_v.context.last && (_v.context.$implicit == _co.prefix));
        _ck(_v,15,0,currVal_4);
      },(null as any));
}
export function View_BreadcrumbComponent_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵeld(0,
      (null as any),(null as any),4,'ul',([] as any[]),[[2,'breadcrumb',(null as any)]],
      (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
      ['\n            '])),(_l()(),i0.ɵand(16777216,(null as any),(null as any),1,
      (null as any),View_BreadcrumbComponent_1)),i0.ɵdid(802816,(null as any),0,i1.NgForOf,
      [i0.ViewContainerRef,i0.TemplateRef,i0.IterableDiffers],{ngForOf:[0,'ngForOf']},
      (null as any)),(_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵted((null as any),
      ['\n    ']))],(_ck,_v) => {
    var _co:i2.BreadcrumbComponent = _v.component;
    const currVal_1:any = _co._urls;
    _ck(_v,4,0,currVal_1);
  },(_ck,_v) => {
    var _co:i2.BreadcrumbComponent = _v.component;
    const currVal_0:any = _co.useBootstrap;
    _ck(_v,1,0,currVal_0);
  });
}
export function View_BreadcrumbComponent_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'breadcrumb',([] as any[]),
      (null as any),(null as any),(null as any),View_BreadcrumbComponent_0,RenderType_BreadcrumbComponent)),
      i0.ɵdid(770048,(null as any),0,i2.BreadcrumbComponent,[i3.Router,i4.BreadcrumbService],
          (null as any),(null as any))],(_ck,_v) => {
    _ck(_v,1,0);
  },(null as any));
}
export const BreadcrumbComponentNgFactory:i0.ComponentFactory<i2.BreadcrumbComponent> = i0.ɵccf('breadcrumb',
    i2.BreadcrumbComponent,View_BreadcrumbComponent_Host_0,{useBootstrap:'useBootstrap',
        prefix:'prefix'},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL2RtaXRyaWdyb3NzbWFuL3Byb2plY3RzL25nMi1icmVhZGNydW1iL2FwcC9jb21wb25lbnRzL2JyZWFkY3J1bWIubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vVXNlcnMvZG1pdHJpZ3Jvc3NtYW4vcHJvamVjdHMvbmcyLWJyZWFkY3J1bWIvYXBwL2NvbXBvbmVudHMvYnJlYWRjcnVtYi50cyIsIm5nOi8vL1VzZXJzL2RtaXRyaWdyb3NzbWFuL3Byb2plY3RzL25nMi1icmVhZGNydW1iL2FwcC9jb21wb25lbnRzL2JyZWFkY3J1bWIudHMuQnJlYWRjcnVtYkNvbXBvbmVudC5odG1sIiwibmc6Ly8vVXNlcnMvZG1pdHJpZ3Jvc3NtYW4vcHJvamVjdHMvbmcyLWJyZWFkY3J1bWIvYXBwL2NvbXBvbmVudHMvYnJlYWRjcnVtYi50cy5CcmVhZGNydW1iQ29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiXG4gICAgICAgIDx1bCBbY2xhc3MuYnJlYWRjcnVtYl09XCJ1c2VCb290c3RyYXBcIj5cbiAgICAgICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgdXJsIG9mIF91cmxzOyBsZXQgbGFzdCA9IGxhc3RcIiBbbmdDbGFzc109XCJ7J2JyZWFkY3J1bWItaXRlbSc6IHVzZUJvb3RzdHJhcCwgJ2FjdGl2ZSc6IGxhc3R9XCI+IDwhLS0gZGlzYWJsZSBsaW5rIG9mIGxhc3QgaXRlbSAtLT5cbiAgICAgICAgICAgICAgICA8YSByb2xlPVwiYnV0dG9uXCIgKm5nSWY9XCIhbGFzdCAmJiB1cmwgPT0gcHJlZml4XCIgKGNsaWNrKT1cIm5hdmlnYXRlVG8oJy8nKVwiPnt7dXJsfX08L2E+XG4gICAgICAgICAgICAgICAgPGEgcm9sZT1cImJ1dHRvblwiICpuZ0lmPVwiIWxhc3QgJiYgdXJsICE9IHByZWZpeFwiIChjbGljayk9XCJuYXZpZ2F0ZVRvKHVybClcIj57e2ZyaWVuZGx5TmFtZSh1cmwpfX08L2E+XG4gICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJsYXN0XCI+e3tmcmllbmRseU5hbWUodXJsKX19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwibGFzdCAmJiB1cmwgPT0gcHJlZml4XCI+e3tmcmllbmRseU5hbWUoJy8nKX19PC9zcGFuPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAiLCI8YnJlYWRjcnVtYj48L2JyZWFkY3J1bWI+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JDR2dCO01BQUE7UUFBQTtRQUFBO1FBQWdEO1VBQUE7VUFBQTtRQUFBO1FBQWhEO01BQUEsZ0NBQTBFOztRQUFBO1FBQUE7Ozs7b0JBQzFFO01BQUE7UUFBQTtRQUFBO1FBQWdEO1VBQUE7VUFBQTtRQUFBO1FBQWhEO01BQUEsZ0NBQTBFOzs7UUFBQTtRQUFBOzs7O29CQUMxRTtNQUFBLHdFQUFtQjthQUFBOztJQUFBO0lBQUE7Ozs7b0JBQ25CO01BQUEsd0VBQW9DO2FBQUE7O0lBQUE7SUFBQTs7OztvQkFKeEM7TUFBQSwrRUFBQTtNQUFBO3FCQUFBLGdEQUErQztNQUFBLGFBQThELHNDQUFtQztNQUFBLHlCQUM1STtNQUFBLG9EQUFBO01BQUEsc0VBQXFGO2FBQUEsd0NBQ3JGO01BQUEsa0VBQUE7TUFBQTtNQUFtRyx1REFDbkc7VUFBQTthQUFBO1VBQUEsd0JBQStDO01BQy9DO2FBQUE7VUFBQSx3QkFBZ0U7OztRQUpyQjtRQUEvQyxXQUErQyxTQUEvQztRQUNxQjtRQUFqQixXQUFpQixTQUFqQjtRQUNpQjtRQUFqQixXQUFpQixTQUFqQjtRQUNNO1FBQU4sWUFBTSxTQUFOO1FBQ007UUFBTixZQUFNLFNBQU47Ozs7b0JBTmhCLCtDQUNRO01BQUE7TUFBQSwwREFBc0M7TUFBQSxxQkFDbEM7TUFBQSxrREFBQTtNQUFBO01BQUEsZUFLSywrQ0FDSjtNQUFBOztJQU5HO0lBQUosV0FBSSxTQUFKOzs7SUFEQTtJQUFKLFdBQUksU0FBSjs7OztvQkNEUjtNQUFBO2FBQUE7VUFBQTtJQUFBOzs7OzsifQ==
