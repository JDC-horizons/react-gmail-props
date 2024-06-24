const EmailList = ({ emails, toggleRead, toggleStar }) => {
  return (
    <ul>
      {emails.map((email) => (
        <EmailItem
          key={email.id}
          email={email}
          toggleRead={toggleRead}
          toggleStar={toggleStar}
        />
      ))}
    </ul>
  );
};

const EmailItem = ({ email, toggleRead, toggleStar }) => {
  const { read, starred, sender, title } = email;
  return (
    <li className={`email ${email ? "read" : "unread"}`}>
      <div className="select">
        <input
          className="select-checkbox"
          type="checkbox"
          checked={read}
          onChange={() => toggleRead(email)}
        />
      </div>
      <div className="star">
        <input
          className="star-checkbox"
          type="checkbox"
          checked={starred}
          onChange={() => toggleStar(email)}
        />
      </div>
      <div className="sender">{sender}</div>
      <div className="title">{title}</div>
    </li>
  );
};

export default EmailList;
