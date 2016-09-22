var tsm = {
  gameType: 'League of Ledgends',
  sport: 'eSports',
  topLane: 'Hauntzer',
  jungle: 'Svenskeren',
  midLane: 'Bjergsen',
  adc: 'Doublelift',
  support: 'Biofrost',
  headCoach: 'Weldon',
  strategicCoach: 'Parth',
  owner: 'Reginald',
  league: 'NA LCS',
  ranking: 1,
  winLossRecord: [17,1],
  teamName: 'Team Solo Mid',
  numberOfPlayers: '5',
  created: '2011',
  teamInfo : function() {
     var info = 'Team name: ' + this.teamName + '\nCreated: ' + this.created + '\nGame played: ' + this.gameType + '\nSport type: ' + this.sport + '\nLeague: ' + this.league + '\nRanking: ' + this.ranking + '\nWin-Loss: ' + this.winLossRecord + '\nOwner: ' + this.owner + '\nHead Coach: ' + this.headCoach + '\nStrategic Coach: ' + this.strategicCoach + '\nNumber of players: ' + this.numberOfPlayers + '\nTop Lane: ' +this.topLane + '\nJungle: ' + this.jungle + '\nMid Lane: ' + this.midLane + '\nADC: ' + this.adc + '\nSupport: ' + this.support;
     return info;
  }

}
console.log(tsm.teamInfo());
