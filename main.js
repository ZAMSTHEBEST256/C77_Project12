var images = ["https://www.toddparr.com/wp-content/uploads/2018/08/97803164425411.jpg", "https://media.discordapp.net/attachments/1006344955297534085/1037422198861856830/best_pfpf.jpg" , "https://media.discordapp.net/attachments/1006344955297534085/1037422198526328852/barne.PNG", "https://media.discordapp.net/attachments/1006344955297534085/1037422200057233562/coolness.jpg", "https://static.wikia.nocookie.net/fanontubbies/images/c/cf/Quandale.png", "https://upload.wikimedia.org/wikipedia/commons/9/97/Bongo_Cat_Redraw.png"];
var names = ["Family Book","Kermit the Frog", "Barney", "Master Oogway", "Quandale Dingle", "Bongo Cat"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    var updatedImage = images[i];
    var updatedName = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
