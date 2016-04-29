/**
 * Created by intel on 4/27/16.
 */
var request = require('request-json');
var client = request.createClient("http://localhost:3000/");

function _item(id, title, price)
{
    this.id     = id;
    this.title  = title;
    this.price  = price;
}
var arr_items = new Array();
arr_items.push(new _item("id => 1", "title => 2", 1.11));
arr_items.push(new _item("id => 2", "title => 2", 2.22));
arr_items.push(new _item("id => 3", "title => 3", 3.33));

function _pay(arr_items, name, cp_id, cp_key, amount, cp_order_no, client_info, channel, comment)
{
    this.items = arr_items;
    this.name = name;
    this.cp_id = cp_id;
    this.cp_key = cp_key;
    this.amount = amount;
    this.cp_order_no = cp_order_no;
    this.client_info = client_info;
    this.channel = channel;
    this.comment = comment;
}

var json_pay = new _pay(arr_items, "cp_id_1234567", "cp_key_7654321", 6.66, "cp_order_num_123", "client_info", "alipay_qr", "comment");

console.log("json_pay:" + JSON.stringify(json_pay) + "\n");

client.post('payment/', json_pay, function(err, res, body){
    
    console.log(res.statusCode, body);
    
});