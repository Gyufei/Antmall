// 商品详情页商品类
export class GoodDetail {
    constructor(
        public g_id: number,
        public g_name: string,
        public g_sub_name: string,
        public o_price: number,
        public price: number,
        public store: number,
        public sell_num: number,
        public img_src: GoodDetailImg[],
        public comments: Comment[],
        ) {}
}

class GoodDetailImg {
  img_url: string;
  big_img_url: string;
}

class Comment {
    comment_data: string;
    commenter_name: string;
    comment_str: string;
}
