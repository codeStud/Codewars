// Given a list of developers, return the list of only those developers who code in 'lang' and are githubAdmins

// My Solution
function findAdmin(list, lang) {
  return list.filter(
    (obj) => obj.language === lang && obj.githubAdmin === "yes"
  );
}
