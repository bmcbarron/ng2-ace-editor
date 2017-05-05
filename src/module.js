"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var component_1 = require('./component');
var directive_1 = require('./directive');
var AceEditorModule = (function () {
    function AceEditorModule() {
    }
    AceEditorModule = __decorate([
        core_1.NgModule({
            declarations: [
                component_1.AceEditorComponent,
                directive_1.AceEditorDirective
            ],
            imports: [],
            providers: [],
            exports: [
                component_1.AceEditorComponent,
                directive_1.AceEditorDirective
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AceEditorModule);
    return AceEditorModule;
}());
exports.AceEditorModule = AceEditorModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFFekMsMEJBQW1DLGFBQWEsQ0FBQyxDQUFBO0FBQ2pELDBCQUFtQyxhQUFhLENBQUMsQ0FBQTtBQWNqRDtJQUFBO0lBRUEsQ0FBQztJQWREO1FBQUMsZUFBUSxDQUFDO1lBQ04sWUFBWSxFQUFFO2dCQUNWLDhCQUFrQjtnQkFDbEIsOEJBQWtCO2FBQ3JCO1lBQ0QsT0FBTyxFQUFFLEVBQUU7WUFDWCxTQUFTLEVBQUUsRUFBRTtZQUNiLE9BQU8sRUFBRTtnQkFDTCw4QkFBa0I7Z0JBQ2xCLDhCQUFrQjthQUNyQjtTQUNKLENBQUM7O3VCQUFBO0lBR0Ysc0JBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQztBQUZZLHVCQUFlLGtCQUUzQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWNlRWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQnO1xuaW1wb3J0IHsgQWNlRWRpdG9yRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBY2VFZGl0b3JDb21wb25lbnQsXG4gICAgICAgIEFjZUVkaXRvckRpcmVjdGl2ZVxuICAgIF0sXG4gICAgaW1wb3J0czogW10sXG4gICAgcHJvdmlkZXJzOiBbXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIEFjZUVkaXRvckNvbXBvbmVudCxcbiAgICAgICAgQWNlRWRpdG9yRGlyZWN0aXZlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBBY2VFZGl0b3JNb2R1bGUge1xuXG59Il19