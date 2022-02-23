// Navegue até a pasta `unix_tests` ;

cd ~/trybe/Aula_/1.3/unix_tests/

// Rode o comando [ls](https://linux.die.net/man/1/ls) `l` e veja quais as permissões dos arquivos;

-rw-rw-r-- 1 cavalcanti_pa cavalcanti_pa 2361 jan 23 13:48 bunch_of_things.txt
-rw-rw-r-- 1 cavalcanti_pa cavalcanti_pa 1842 jan 23 13:32 countries.txt
-rw-rw-r-- 1 cavalcanti_pa cavalcanti_pa  518 jan 23 13:29 phrases2.txt
-rw-rw-r-- 1 cavalcanti_pa cavalcanti_pa   53 jan 21 19:10 skills2.txt
-rw-rw-r-- 1 cavalcanti_pa cavalcanti_pa   19 jan 23 12:39 top_skills.txt

// Mude a permissão do arquivo `bunch_of_things.txt` para que todos os usuários possam ter acesso à leitura e escrita, e verifique se está correto com o comando `ls -l` ;
    
    chmod 666 bunch_of _things.txt

    
// Tire a permissão de escrita do arquivo `bunch_of_things.txt` para todos os usuários, verifique se está correto com o comando `ls -l` ;

    chmod 444 bunch_of_things.txt

    
// Volte à permissão do arquivo `bunch_of_things.txt` para a listada inicialmente utilizando o comando `chmod 644 bunch_of_things.txt` .

chmod 644 bunch_of_things.txt