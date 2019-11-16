import 'package:flutter/material.dart';

class Basket extends StatefulWidget 
{
  Basket({Key key}) : super(key: key);


  _BasketState createState
  () => _BasketState();
}


class _BasketState extends 
State<Basket> {
  @override
  Widget build(BuildContext context) {
    return Container(
       child: 
       Text("Baskets"),
    );
  }
}