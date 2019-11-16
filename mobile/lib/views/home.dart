import 'package:flutter/material.dart';

class Home extends StatefulWidget {
  Home({Key key}) : super(key: key);

  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  @override
  Widget build(BuildContext context) {
    double width = MediaQuery.of(context).size.width;
    double height = MediaQuery.of(context).size.height;

    return Container(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.start,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          Container(
              height: height * 0.3,
              child: Container(
                width: width * 0.9,
                decoration: BoxDecoration(
                    color: Color.fromRGBO(51, 53, 151, 1),
                    borderRadius:
                        BorderRadius.only(bottomRight: Radius.circular(20.0))),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: <Widget>[
                    Column(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      crossAxisAlignment: CrossAxisAlignment.center,
                      children: <Widget>[Text("Spent"), Text("gdasg")],
                    ),
                    Column(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      crossAxisAlignment: CrossAxisAlignment.center,
                      children: <Widget>[Text("Spent"), Text("gdasg")],
                    )
                  ],
                ),
              )),
          ListTile(
            title: Text("ErotikMarkt"),
            subtitle: Text("-9000"),
            trailing: Chip(
              label: Text("-22"),
              backgroundColor: Colors.red,
            ),
          ),
          ListTile(
            title: Text("ErotikMarkt"),
            subtitle: Text("-9000"),
            trailing: Chip(
              label: Text("-22"),
              backgroundColor: Colors.red,
            ),
          ),
          ListTile(
            title: Text("ErotikMarkt"),
            subtitle: Text("-9000"),
            trailing: Chip(
              label: Text("-22"),
              backgroundColor: Colors.red,
            ),
          ),
        ],
      ),
    );
  }
}

//  color: Colors.black,
//       child: Column(
//         mainAxisAlignment: MainAxisAlignment.center,
//         crossAxisAlignment: CrossAxisAlignment.center,
//         children: <Widget>[
//           ListView(
//             padding: const EdgeInsets.all(8),
//             children: <Widget>[
//               ListTile(
//                 title: Text("ErotikMarkt"),
//                 subtitle: Text("-9000"),
//                 trailing: Chip(label: Text("-22"),backgroundColor: Colors.red,),
//               )
//             ],
//           )
//         ],
//       ),
