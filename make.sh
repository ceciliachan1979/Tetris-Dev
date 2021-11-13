for file in goal/*
do
    sed -i "s/import.*$//g" $file
    sed -i "s/export //g" $file
    sed -i "s/pop()!/pop()/g" $file
    sed -i '/./,$!d' $file
done
