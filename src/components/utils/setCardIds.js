export function setIds(list){
	for(let i in list){
		list[i].id = parseInt(i);
	};
	return list;
};