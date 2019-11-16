import 'package:flutter/material.dart';

class Leaderboard extends StatefulWidget {
  Leaderboard({Key key}) : super(key: key);

  _LeaderboardState createState() => _LeaderboardState();
}

class _LeaderboardState extends State<Leaderboard> {
  @override
  Widget build(BuildContext context) {
    return Container(
       child: Text("Leaderboard"),
    );
  }
}