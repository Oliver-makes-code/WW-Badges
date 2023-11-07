const users = JSON.parse(await Deno.readTextFile("./users.json"))

try {
  await Deno.mkdir("out")
} catch (e) {}

for (user in users) {
  Deno.writeTextFile("out/"+user.uuid+".json", JSON.stringify(user))
}
