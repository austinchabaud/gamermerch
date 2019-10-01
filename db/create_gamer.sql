insert into gamer_info
    (email, password, username)
values
    ($1, $2, $3);
select email, username
from gamer_info
where email = $1;