export class Good{
  constructor(
    public g_id:number,
    public g_name:string,
    public price:number,
    public img_src:string
    ){}
};

export class Cate{
  constructor(
    public c_id:number,
    public c_name:string,
    public goods:Good[],
    ){}
}

export class SubCate{
    constructor(
        public bl_c_id:number,
        public sub_cate_list:Array<string[]>
        ){}
}