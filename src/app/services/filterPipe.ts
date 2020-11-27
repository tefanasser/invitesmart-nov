import { Pipe, PipeTransform } from '@angular/core';
 
@Pipe({
	name: 'filterName',
})
export class FilterPipe implements PipeTransform {
 
	transform(value: any, args?: any[]): any[] {
 
		if(value) {
 
			let keyArr: any[] = Object.keys(value),
			dataArr = [];
 
			keyArr.forEach((key: any) => {
                if(key.name != '') {
                    dataArr.push(key);
                }
			});
			return dataArr;
		}
	}
}
