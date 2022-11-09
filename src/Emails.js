import Email from "./Email";

function Emails(props) {
  const getReadEmails = (emails) => emails.filter((email) => !email.read);

  const getStarredEmails = (emails) => emails.filter((email) => email.starred);

  // emails prop, setEmails
  const toggleStar = (targetEmail) => {
    const updatedEmails = (emails) =>
      emails.map((email) =>
        email.id === targetEmail.id
          ? { ...email, starred: !email.starred }
          : email
      );
    props.setEmails(updatedEmails);
  };

  const toggleRead = (targetEmail) => {
    const updatedEmails = (emails) =>
      emails.map((email) =>
        email.id === targetEmail.id ? { ...email, read: !email.read } : email
      );
    props.setEmails(updatedEmails);
  };

  // Condition
  let filteredEmails = props.emails;

  if (hideRead) filteredEmails = getReadEmails(filteredEmails);

  if (currentTab === "starred") {
    filteredEmails = getStarredEmails(filteredEmails);
  }
  // End of Condition

  return (
    <main className="emails">
      <ul>
        {filteredEmails.map((email, index) => (
          <Email
            email={email}
            toggleRead={toggleRead}
            toggleStar={toggleStar}
          />
        ))}
      </ul>
    </main>
  );
}

export default Emails;
