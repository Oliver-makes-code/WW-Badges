const users = JSON.parse(await Deno.readTextFile("./users.json"))

try {
  await Deno.mkdir("out")
} catch (e) {}

for (const user of users) {
  Deno.writeTextFile("out/"+user.uuid+".json", JSON.stringify(user))
}
