// 首页商品类
export class Good {
  constructor(
    public g_id: number,
    public g_name: string,
    public price: number,
    private img_src: string
    ) {}
}

// 首页分类及分类下商品类
export class Cate {
  constructor(
    public c_id: number,
    public c_name: string,
    public goods: Good[],
    ) {}
}

// 子分类类
export class SubCate {
    constructor(
        public bl_c_id: number,
        public sub_cate_list: Array<string[]>
        ) {}
}







